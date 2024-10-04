import { Textarea } from "@nextui-org/input";
import React from "react";

function VerseSubjectInput({userSelection} : any) {
  return (
    <div>
      <label className="font-bold text-4xl text-primary">
        1. Verse Subject
      </label>
      <Textarea
        placeholder="Write the subject of the verse which you want to generate"
        size="lg"
        classNames={{
          input: "resize-y min-h-[230px] text-2xl p-5",
        }}
        className="mt-3 max-w-lg"
        onChange={(e) => userSelection({
            fieldValue: e.target.value,
            fieldName: "verseSubject"
        })}
      />
    </div>
  );
}

export default VerseSubjectInput;
