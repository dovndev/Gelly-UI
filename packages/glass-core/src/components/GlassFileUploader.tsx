import React from "react";
import clsx from "clsx";

export interface GlassFileUploaderProps {
  onFile: (file: File) => void;
  className?: string;
}

export const GlassFileUploader: React.FC<GlassFileUploaderProps> = ({
  onFile,
  className,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = React.useState(false);

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center border-2 border-dashed border-white/40 rounded-xl bg-white/20 backdrop-blur-lg p-8 cursor-pointer transition",
        dragOver && "border-blue-400 bg-blue-100/40",
        className
      )}
      onClick={() => inputRef.current?.click()}
      onDragOver={e => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={e => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files[0]) onFile(e.dataTransfer.files[0]);
      }}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={e => {
          if (e.target.files && e.target.files[0]) onFile(e.target.files[0]);
        }}
      />
      <span className="text-black font-semibold">Drag & drop or click to upload</span>
    </div>
  );
};