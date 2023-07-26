import React, {
  LegacyRef,
  useRef,
  useState,
  DragEvent,
  useEffect,
} from 'react';

import classNames from 'classnames';

import { Button, LoadingSpinner, Typography } from 'components/common';

type DropAreaProps = {
  value?: string;
  title: string;
  onChange: (file: File[]) => void;
  fullWidth?: boolean;
  loading?: boolean;
};
type ContainerDimensions = {
  height: number;
  width: number;
};

export function DropArea({
  value,
  title,
  onChange,
  fullWidth,
  loading,
}: DropAreaProps) {
  const hiddenFileInput = useRef<HTMLInputElement>();
  const [active, setActive] = useState(false);
  const spanRef = useRef<HTMLSpanElement>();

  const widthRef = useRef<ContainerDimensions>({ height: 10, width: 10 });
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setActive(true);
    } else if (e.type === 'dragleave') {
      setActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);

    const files = e.dataTransfer?.files;
    const filesArray = Object.values(files);
    if (files) {
      onChange(filesArray);
    }
  };

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    const filesArray = Object.values(files as FileList);
    if (files) {
      onChange(filesArray);
    }
  };

  useEffect(() => {
    widthRef.current.width = spanRef.current?.getBoundingClientRect()
      .width as number;
    widthRef.current.height = spanRef.current?.getBoundingClientRect()
      .height as number;
  }, []);

  return (
    <div
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={classNames(
        'grow rounded border  border-zinc-400 bg-background-light p-2 ',
        `${fullWidth ? 'w-full' : 'w-52'}`
      )}>
      <div
        className={`flex  h-64 w-full grow items-center justify-center rounded border-background-contrastText  ${
          active ? 'border-primary-main' : 'border-background-contrastText'
        } `}>
        {loading ? (
          <div
            className="w-fulljustify-center flex "
            style={{
              width: widthRef.current.width,
              height: widthRef.current.height,
              maxHeight: widthRef.current.height,
              maxWidth: widthRef.current.width,
            }}>
            <LoadingSpinner className="text-primary-main" />
          </div>
        ) : value ? (
          <div className="mt-4 flex  w-full flex-col items-center">
            <img alt="" src={value} className="h-20 w-2/3 rounded  " />
            <Button onClick={handleClick} variant="text">
              Change
            </Button>
          </div>
        ) : (
          <div
            ref={spanRef as LegacyRef<HTMLDivElement>}
            className="flex w-full flex-col items-center">
            {' '}
            <Typography>{`Drag and Drop your ${title} here `}</Typography>
            {!active && (
              <Button
                variant="text"
                color="secondary"
                onClick={handleClick}
                size="small"
                className="">
                or Click to select and upload
              </Button>
            )}
          </div>
        )}
      </div>
      <input
        type="file"
        multiple
        max={5}
        ref={hiddenFileInput as LegacyRef<HTMLInputElement>}
        onChange={handleChange}
        className="hidden"
        accept="image/png, image/jpeg"
      />
    </div>
  );
}
