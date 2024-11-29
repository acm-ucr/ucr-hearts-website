import { motion } from "framer-motion";
import Event from "./Event";
import { eventInfo } from "@/data/eventInfo";

const EventList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-[25%] md:mb-[10%]"
    >
      <h2 className="font-title text-[6vw] font-light text-hearts-light-brown md:text-[4vw]">
        Upcoming Events
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-[2%] ml-[13%] h-[1px] w-[30%] origin-left bg-hearts-light-brown md:h-[3px] md:w-[22%]"
      />
      {eventInfo.map((event, index) => (
        <Event
          key={index}
          title={event.title}
          time={event.time}
          link={event.link}
        />
      ))}
    </motion.div>
  );
};

export default EventList;
