"use client";

import * as RadixSplider from "@radix-ui/react-slider";

interface SliderProps {
    value?: number;
    onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
    value = 1,
    onChange
}) => {
    const handleChange = (newValue: number[])=> {
        onChange?.(newValue[0]);
    }

    return ( 
        <RadixSplider.Root
            className="
                relative
                flex
                items-center
                select-none
                touch-none
                w-full
                h-10
            "
            defaultValue={[1]}
            value={[value]}
            onValueChange={handleChange}
            max={1}
            step={0.1}
            aria-label="Volume"
        >
            <RadixSplider.Track
                className="
                    bg-neutral-600
                    relative
                    grow
                    rounded-full
                    h-[3px]
                "
            >
                <RadixSplider.Range 
                    className="
                        absolute
                        bg-white
                        rounded-full
                        h-full
                    "
                />
            </RadixSplider.Track>
        </RadixSplider.Root>
     );
}
 
export default Slider;