"use client";
import { easeIn, motion } from "framer-motion";

const List = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <h3 className="text-lg font-semibold">Lorem Ipsum</h3>
      <motion.ul variants={item} className="">
        <motion.li variants={item} className="list-disc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac lacus
          eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Duis sed neque eu mass.
        </motion.li>
        <motion.li variants={item} className="list-disc">
          Donec in diam et augue volutpat sagittis. Nulla eget tincidunt nisl.
          Pellentesque ullamcorper ligula sed nibh tempus, sit amet aliquet
          mauris accumsan. Aliquam erat volutpat. Etiam at dui nibh. Aliquam in
          ante felis. Pellentesque vitae lectus et sapien.
        </motion.li>
        <motion.li variants={item} className="list-disc">
          A dapibus venenatis ac at tortor.semper cursus. Suspendisse posuere
          neque sapien, id facilisis est hendrerit id. Suspendisse ac eros ac
          est ultrices porttitor eu a dui.
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};
export default List;
