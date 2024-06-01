'use client'
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/dist/style.css";

export function MyDatePicker() {
  const [selected, setSelected] = useState<Date>();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}