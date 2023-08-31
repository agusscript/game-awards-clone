type IconAwardsProps = {
  className: string;
  width: number;
  height: number;
  color: string;
};

function IconAwards({ className, width, height, color }: IconAwardsProps) {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 41.6 43.264"
        width={width}
        height={height}
        fill={color}
      >
        <path d="m31.2 29.97 1.911-1.847 1.9-5.67-3.8 3.8zm-4.048-7.506 11.082-11.071-1.578 5.358-9.514 9.267zM23.1 18.5l-.011 3.544L40.023 5.357 41.6 0zM8.593 28.164l2.448 2.405-1.256 1.256.977 2.556 2.072-2.04 2.255 2.223-3.071 3.06 1 2.534 3.876-3.823 2.137 2.1-4.821 4.821h3.726l3-2.953 3 2.953h3.544L6.648 22.446zm-7-22.808 17.4 17.245-.011.011-.011 3.544 1.815-1.783 2.33 2.309-.011 3.382 1.729-1.675 2.373 2.352v3.243l1.654-1.611 2.019 2 .988-2.545L0 .011zM5.018 16.91l9.89 9.782-.011 3.533 1.793-1.772 2.276 2.255-.011 3.479 1.783-1.729L23.1 34.8v3.275l1.665-1.621 3.812 3.78.988-2.545L3.439 11.553z"></path>
      </svg>
    </>
  );
}

export default IconAwards;
