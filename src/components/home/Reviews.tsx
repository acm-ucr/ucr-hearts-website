"use client";
import Review from "./Review";
import { reviews } from "@/data/reviews";
import { useState, RefObject, useEffect } from "react";
import { motion, useAnimate, Variant } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type AnimationEntry = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animate: any;
  target: RefObject<HTMLElement>;
  props: Partial<Variant>;
};

type AnimationMap = Record<string, AnimationEntry[]>;

const shiftVar = {
  initial: { opacity: 0 },
  rightShift: {
    x: ["-150%", "0%"],
    opacity: ["0%", "100%"],
    transition: { duration: 0.5 },
  },
  leftShift: {
    x: ["150%", "0%"],
    opacity: ["0%", "100%"],
    transition: { duration: 0.5 },
  },
  shiftIn: {
    x: ["-100%", "0%"],
    y: ["10%", "0%"],
    opacity: ["0%", "100%"],
    transition: { duration: 0.5 },
  },
  shiftOut: {
    x: ["0%", "50%"],
    y: ["0%", "10%"],
    opacity: ["0%", "100%", "0%"],
    transition: { duration: 0.5 },
  },
  fadeIn: {
    y: ["10%", "0%"],
    opacity: ["0%", "100%"],
    transition: { duration: 0.5 },
  },
};

const Reviews = () => {
  const [currInd, setCurrInd] = useState(0);
  const [leftInd, setLeftInd] = useState(reviews?.length - 1 || 0);
  const [rightInd, setRightInd] = useState(currInd + 1);

  const [rev1, animate1] = useAnimate();
  const [rev2, animate2] = useAnimate();
  const [rev3, animate3] = useAnimate();
  const [rev4, animate4] = useAnimate();
  const [rev5, animate5] = useAnimate();

  const [isBelow768, setIsBelow768] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        if (!isBelow768) {
          setIsBelow768(true);
          setCurrInd(0);
        }
      } else {
        if (isBelow768) {
          setIsBelow768(false);
          setCurrInd(0);
        }
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    if (mediaQuery.matches) {
      setIsBelow768(true);
    }

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [isBelow768]);

  const animationMap: AnimationMap = {
    leftShift: [
      {
        animate: animate1,
        target: rev1,
        props: {
          x: ["0%", "-50%"],
          y: ["0%", "10%"],
          opacity: ["100%", "0%"],
        },
      },
      {
        animate: animate2,
        target: rev2,
        props: {
          x: ["150%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate3,
        target: rev3,
        props: {
          x: ["150%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate4,
        target: rev4,
        props: {
          x: ["100%", "0%"],
          y: ["10%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
    ],
    rightShift: [
      {
        animate: animate2,
        target: rev2,
        props: {
          x: ["-100%", "0%"],
          y: ["10%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate3,
        target: rev3,
        props: {
          x: ["-150%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate4,
        target: rev4,
        props: {
          x: ["-150%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate5,
        target: rev5,
        props: {
          x: ["0%", "50%"],
          y: ["0%", "10%"],
          opacity: ["100%", "0%"],
        },
      },
    ],
    leftShiftSmall: [
      {
        animate: animate3,
        target: rev3,
        props: {
          x: ["25%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
    ],
    rightShiftSmall: [
      {
        animate: animate3,
        target: rev3,
        props: {
          x: ["-25%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
    ],
  };

  const runAnimations = (animationKey: keyof AnimationMap) => {
    animationMap[animationKey]?.forEach(({ animate, target, props }) => {
      if (target?.current) {
        animate(target.current, props, { duration: 0.5 });
      }
    });
  };

  const leftShift = () => runAnimations("leftShift");
  const rightShift = () => runAnimations("rightShift");
  const leftShiftSmall = () => runAnimations("leftShiftSmall");
  const rightShiftSmall = () => runAnimations("rightShiftSmall");

  const prevRev = () => {
    const isFirstRev = currInd === 0;
    const newInd = isFirstRev ? reviews?.length - 1 : currInd - 1;
    const newLeftInd = newInd - 1 === -1 ? reviews?.length - 1 : newInd - 1;
    const newRightInd = newInd + 1 === reviews?.length ? 0 : newInd + 1;
    setCurrInd(newInd);
    setLeftInd(newLeftInd);
    setRightInd(newRightInd);

    if (isBelow768) {
      rightShiftSmall();
    } else {
      rightShift();
    }
  };

  const nextRev = () => {
    const isLastRev = currInd === reviews?.length - 1;
    const newInd = isLastRev ? 0 : currInd + 1;
    const newLeftInd = newInd - 1 === -1 ? reviews?.length - 1 : newInd - 1;
    const newRightInd = newInd + 1 === reviews?.length ? 0 : newInd + 1;
    setCurrInd(newInd);
    setLeftInd(newLeftInd);
    setRightInd(newRightInd);

    if (isBelow768) {
      leftShiftSmall();
    } else {
      leftShift();
    }
  };

  const goToRev = (revIdx: number) => {
    const newInd = revIdx;
    const newLeftInd = revIdx - 1 === -1 ? reviews?.length - 1 : revIdx - 1;
    const newRightInd = revIdx + 1 === reviews?.length ? 0 : revIdx + 1;
    const prevInd = currInd;
    setCurrInd(newInd);
    setLeftInd(newLeftInd);
    setRightInd(newRightInd);

    if (prevInd > revIdx) {
      if (isBelow768) {
        rightShiftSmall();
      } else {
        rightShift();
      }
    } else if (revIdx > prevInd) {
      if (isBelow768) {
        leftShiftSmall();
      } else {
        leftShift();
      }
    }
  };

  return (
    <div className="relative mb-[15%] mt-[1%] flex aspect-[4/1] md:w-[90%] flex-row items-center justify-center md:justify-evenly">
      <motion.div
        ref={rev1}
        variants={shiftVar}
        initial="initial"
        className="absolute right-[66%] -z-10 hidden aspect-[4/3] w-[25vw] md:block"
      >
        <Review quote={reviews[leftInd]?.quote} name={reviews[leftInd]?.name} />
      </motion.div>
      <motion.div
        ref={rev2}
        variants={shiftVar}
        initial="initial"
        whileInView="shiftIn"
        className="hidden aspect-[4/3] w-[25vw] cursor-pointer md:block"
        onClick={prevRev}
      >
        <Review quote={reviews[leftInd]?.quote} name={reviews[leftInd]?.name} />
      </motion.div>

      <motion.div
        className="md:hidden"
        whileInView={{ opacity: ["0%", "100%"] }}
        transition={{ duration: 0.5 }}
      >
        <FaArrowLeft
          className="mr-[10vw] scale-[125%] cursor-pointer text-hearts-blue active:scale-[150%]"
          onClick={prevRev}
        />
      </motion.div>

      <motion.div
        ref={rev3}
        variants={shiftVar}
        initial="initial"
        whileInView={isBelow768 ? "fadeIn" : "rightShift"}
        className="aspect-[4/3] w-[50vw] cursor-pointer md:w-[25vw]"
      >
        <Review quote={reviews[currInd]?.quote} name={reviews[currInd]?.name} />
      </motion.div>

      <motion.div
        className="md:hidden"
        whileInView={{ opacity: ["0%", "100%"] }}
        transition={{ duration: 0.5 }}
      >
        <FaArrowRight
          className="ml-[10vw] scale-[125%] cursor-pointer text-hearts-blue active:scale-[150%]"
          onClick={nextRev}
        />
      </motion.div>

      <motion.div
        ref={rev4}
        variants={shiftVar}
        initial="initial"
        whileInView="rightShift"
        className="hidden aspect-[4/3] w-[25vw] cursor-pointer md:block"
        onClick={nextRev}
      >
        <Review
          quote={reviews[rightInd]?.quote}
          name={reviews[rightInd]?.name}
        />
      </motion.div>
      <motion.div
        ref={rev5}
        variants={shiftVar}
        initial="initial"
        whileInView="shiftOut"
        className="absolute left-[67%] -z-10 hidden aspect-[4/3] w-[25vw] md:block"
      >
        <Review
          quote={reviews[rightInd]?.quote}
          name={reviews[rightInd]?.name}
        />
      </motion.div>

      <div className="absolute -bottom-[20%] mx-[10%] flex items-center justify-center space-x-[1.5vw] md:-bottom-[2vw] md:space-x-[0.5vw]">
        {reviews.map((_, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: ["0%", "50%", "100%"] }}
            transition={{ duration: 0.5, delay: 0 + index / 10 }}
            onClick={() => goToRev(index)}
            className={`aspect-square w-[3vw] cursor-pointer rounded-full hover:scale-[130%] md:w-[1vw] ${
              currInd === index ? "bg-hearts-blue" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
