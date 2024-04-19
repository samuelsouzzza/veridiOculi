'use client';

type LoadingProps = {
  white?: boolean;
};

export const Loading = ({ white }: LoadingProps) => {
  return (
    <svg
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      width='auto'
      height='auto'
      style={{
        shapeRendering: 'auto',
        display: 'block',
        background: 'rgba(255, 255, 255, 0)',
        maxWidth: '100%',
      }}
    >
      <g>
        <circle
          cx='50'
          cy='50'
          r='30'
          stroke-width='4'
          stroke={`${white ? '#fff' : '#39a600'}`}
          stroke-dasharray='47.12388980384689 47.12388980384689'
          fill='none'
          stroke-linecap='round'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='0.7352941176470588s'
            keyTimes='0;1'
            values='0 50 50;360 50 50'
          ></animateTransform>
        </circle>
        <g></g>
      </g>
    </svg>
  );
};
