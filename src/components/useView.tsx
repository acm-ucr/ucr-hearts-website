import { useRef, useState, useEffect } from "react";

const useView = (): [boolean, React.RefObject<HTMLDivElement>] => {
  const [inView, setInView] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) {
        setInView(false);
        return;
      }
      const { top, bottom } = ref.current.getBoundingClientRect();
      setInView(top <= window.innerHeight && bottom >= 0);
    };

    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  }, []);

  return [inView, ref];
};

export default useView;
