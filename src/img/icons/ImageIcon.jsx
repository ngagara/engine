export const ImageIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="2" y="2" width="16" height="16" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_48_307" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_48_307"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
