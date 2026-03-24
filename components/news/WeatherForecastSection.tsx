"use client";

import { useMemo, useState } from "react";
import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

type ForecastState = {
  latitude: number;
  longitude: number;
  currentTemp: number;
  currentWind: number;
  updatedAt: string;
  days: Array<{
    date: string;
    max: number;
    min: number;
  }>;
};

export function WeatherForecastSection({ t }: Props) {
  const copy = t.newsPage.weatherSection;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [forecast, setForecast] = useState<ForecastState | null>(null);

  const dayFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(t.dateLocale, {
        weekday: "short",
        day: "2-digit",
        month: "short",
      }),
    [t.dateLocale],
  );

  const timeFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(t.dateLocale, {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    [t.dateLocale],
  );

  async function loadForecast() {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setError(copy.unsupported);
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const url = new URL("https://api.open-meteo.com/v1/forecast");
          url.searchParams.set("latitude", String(latitude));
          url.searchParams.set("longitude", String(longitude));
          url.searchParams.set("current", "temperature_2m,wind_speed_10m");
          url.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,time");
          url.searchParams.set("forecast_days", "5");
          url.searchParams.set("timezone", "auto");

          const res = await fetch(url.toString(), { cache: "no-store" });
          if (!res.ok) {
            setError(copy.failed);
            setLoading(false);
            return;
          }

          const json = (await res.json()) as {
            current?: { temperature_2m?: number; wind_speed_10m?: number; time?: string };
            daily?: {
              time?: string[];
              temperature_2m_max?: number[];
              temperature_2m_min?: number[];
            };
          };

          const times = json.daily?.time ?? [];
          const maxs = json.daily?.temperature_2m_max ?? [];
          const mins = json.daily?.temperature_2m_min ?? [];

          const days = times
            .map((date, idx) => ({
              date,
              max: maxs[idx] ?? 0,
              min: mins[idx] ?? 0,
            }))
            .slice(0, 5);

          setForecast({
            latitude,
            longitude,
            currentTemp: json.current?.temperature_2m ?? 0,
            currentWind: json.current?.wind_speed_10m ?? 0,
            updatedAt: json.current?.time ?? new Date().toISOString(),
            days,
          });
        } catch {
          setError(copy.failed);
        } finally {
          setLoading(false);
        }
      },
      (geoError) => {
        setLoading(false);
        if (geoError.code === 1) {
          setError(copy.denied);
          return;
        }
        setError(copy.failed);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }

  return (
    <section className="section-reveal is-visible mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:mt-10 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900">{copy.title}</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">{copy.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={loadForecast}
          disabled={loading}
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-500"
        >
          {loading ? copy.loading : copy.locateButton}
        </button>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>
      ) : null}

      {forecast ? (
        <div className="mt-6 space-y-5">
          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 md:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{copy.locationLabel}</p>
              <p className="mt-1 text-sm font-medium text-zinc-900">
                {forecast.latitude.toFixed(3)}, {forecast.longitude.toFixed(3)}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{copy.todayLabel}</p>
              <p className="mt-1 text-sm font-medium text-zinc-900">
                {forecast.currentTemp.toFixed(1)} C | {forecast.currentWind.toFixed(0)} km/h
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{copy.updatedLabel}</p>
              <p className="mt-1 text-sm font-medium text-zinc-900">
                {timeFormatter.format(new Date(forecast.updatedAt))}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {forecast.days.map((day) => (
              <article key={day.date} className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {dayFormatter.format(new Date(day.date))}
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">{Math.round(day.max)} C</p>
                <p className="text-xs text-zinc-600">{Math.round(day.min)} C</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
