import { motion } from "framer-motion";

interface ComCardProps {
  icon: React.ElementType;
  title: string;
  text: string;
  item1: string;
  item2: string;
  item3: string;
}

const ComCard: React.FC<ComCardProps> = ({
  icon: Icon,
  title,
  text,
  item1,
  item2,
  item3,
}) => {
  return (
    <div className="flex justify-center">
      <motion.div
        whileInView={{ y: ["20%", "0%"] }}
        transition={{ duration: 0.75 }}
        className="my-[3%] w-[85%] rounded-[2.5vw] bg-white px-[10%] py-[3%] shadow-hearts md:w-[70%] md:px-[8%] md:py-[2%]"
      >
        <div className="relative flex items-center text-hearts-blue">
          {Icon && (
            <motion.div
              whileInView={{ scale: [1, 1.25, 1] }}
              className="absolute left-[-9%] text-[5vw] md:text-[3.1vw]"
            >
              <Icon />
            </motion.div>
          )}
          <motion.h2
            whileInView={{ y: ["20%", "0%"], opacity: ["0%", "50%", "100%"] }}
            transition={{ duration: 0.75 }}
            className="text-nowrap font-title text-[4.2vw] md:text-[3vw]"
          >
            {title}
          </motion.h2>
        </div>

        <motion.p
          whileInView={{ y: ["20%", "0%"], opacity: ["0%", "50%", "100%"] }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mb-[1%] font-hearts text-[2.5vw] font-thin text-hearts-brown md:text-[1.3vw]"
        >
          {text}
        </motion.p>

        <ul className="list-inside list-disc text-nowrap pl-[4%] font-hearts text-[2.5vw] font-thin text-hearts-brown md:text-[1.3vw]">
          <motion.li
            whileInView={{ x: ["5%", "0%"], opacity: ["0%", "50%", "100%"] }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="md:mb-2"
          >
            {item1}
          </motion.li>
          <motion.li
            whileInView={{ x: ["5%", "0%"], opacity: ["0%", "50%", "100%"] }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="md:mb-2"
          >
            {item2}
          </motion.li>
          <motion.li
            whileInView={{ x: ["5%", "0%"], opacity: ["0%", "50%", "100%"] }}
            transition={{ duration: 0.75, delay: 0.4 }}
          >
            {item3}
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ComCard;
