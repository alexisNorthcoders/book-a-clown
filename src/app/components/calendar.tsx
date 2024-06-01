'use client'
import { DayPicker,DayMouseEventHandler } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/dist/style.css";
const bookedDays = [
    new Date(2024, 5, 8),
    new Date(2024, 5, 9),
    new Date(2024, 5, 10),
    { from: new Date(2024, 5, 15), to: new Date(2024, 5, 20) }
  ];
export function MyDatePicker() {
  const [selected, setSelected] =  useState<Date | undefined>();
  const [footerMessage,setFooterMessage] = useState<String>("Select a date");
  const handleDayClick: DayMouseEventHandler = (day, { booked }) => {
    if (booked){
      setFooterMessage(`${day.toDateString()} is not available`)
      
}
    else{

      setFooterMessage(day ? `You selected ${day.toDateString()}`: `Select a date`)
    }
  };
  return( <><DayPicker mode="single" onDayClick={handleDayClick} modifiersClassNames={{ booked: "booked" }}  modifiers={{ booked: bookedDays }} selected={selected} onSelect={setSelected}  footer={footerMessage} />
 
  </>);
}