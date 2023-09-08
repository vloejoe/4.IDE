import React from "react";
import { useDispatch } from "react-redux";
import { updateCode } from "../features/tabs";

export default function CodeTab({ code, id }) {
  const dispatch = useDispatch();

  return (
    <textarea
      spellCheck="false"
      onChange={(e) => dispatch(updateCode({ id, value: e.target.value }))}
      value={code}
      className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outiline-none resize-none"
    ></textarea>
  );
}
