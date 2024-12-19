import { motion } from "framer-motion";

const Button01 = () => {
  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0.2)",
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 1.2,
      boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
    }
  };
  return (
    <div className='h-screen w-screen flex items-center justify-center afcad-flux'>
      <motion.div
        variants={buttonVariants}
        whileHover='hover'
        whileTap='tap'
      >
      <button className="bg-orange-300 px-4 py-3 rounded-lg font-medium text-black border-black border-2 ">
        Subscribe 
      </button>
      </motion.div>
    </div>
  )
}

export default Button01