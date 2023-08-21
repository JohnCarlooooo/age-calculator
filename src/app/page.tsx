"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/form/Input";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import moment from "moment";

interface FormInput {
  day: number;
  month: number;
  year: number;
}
interface ResultT {
  day: string;
  month: string;
  year: string;
}

const fieledValidations = {
  day: {
    required: "This field is required",
    min: { value: 1, message: "Must be a valid day" },
    max: { value: 31, message: "Must be a valid day" },
  },
  month: {
    required: "This field is required",
    min: { value: 1, message: "Must be a valid month" },
    max: { value: 12, message: "Must be a valid month" },
  },
  year: {
    required: "This field is required",
    min: { value: 1, message: "Must be a valid year" },
    max: { value: 2022, message: "Must be in the past" },
  },
};

export default function Home() {
  const [result, setResult] = useState<ResultT>({
    day: "",
    month: "",
    year: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const completeDate = `${data.year}-${data.month}-${data.day}`;
    const day = moment().diff(moment(completeDate, "YYYY-MM-DD"), "days");
    const month = moment().diff(moment(completeDate, "YYYY-MM-DD"), "months");
    const year = moment().diff(moment(completeDate, "YYYY-MM-DD"), "years");
    setResult({
      day: (day % 31).toString(),
      month: (month % 12).toString(),
      year: year.toString(),
    });
  };
  const onError: SubmitErrorHandler<FormInput> = (data) => {
    setResult({
      day: "",
      month: "",
      year: "",
    });
  };

  return (
    <main className=" max-w-3xl bg-White w-full px-8 py-20 rounded-3xl rounded-br-[100px] flex flex-col justify-between gap-10">
      <div className="flex flex-row justify-between gap-6 max-w-xl">
        <Input
          label="D A Y"
          register={register}
          name="day"
          error={errors.day?.message}
          placeholder="DD"
          rules={fieledValidations.day}
        />
        <Input
          label="M O N T H"
          register={register}
          name="month"
          error={errors.month?.message}
          placeholder="MM"
          rules={fieledValidations.month}
        />
        <Input
          label="Y E A R"
          register={register}
          name="year"
          error={errors.year?.message}
          placeholder="YYYY"
          rules={fieledValidations.year}
        />
      </div>
      <div className="relative flex flex-col justify-center items-center desktop:items-end px-2 transition-all duration-300">
        <Button onClick={handleSubmit(onSubmit, onError)} />
        <div className="w-full absolute top-2/4 l-2/4 z-10">
          <hr className="border-LightGrey border-[1px]" />
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="flex flex-row gap-3">
          <span className="result-value">
            {result.year ? result.year : "--"}
          </span>
          <span className="text-OffBlack font-extrabold text-7xl italic">
            years
          </span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="result-value">
            {result.month ? result.month : "--"}
          </span>
          <span className="result-label">months</span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="result-value">{result.day ? result.day : "--"}</span>
          <span className="result-label">days</span>
        </div>
      </div>
    </main>
  );
}
