'use client'
import Homepage from "@/components/home";
import Explore from "@/components/explore";
import Image from "next/image";
import UBExplore from "@/components/UBExplore";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "linear"
    }
  }
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Homepage />
      </motion.div>
      <motion.div variants={itemVariants}>
        <UBExplore/>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Explore />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Footer />
      </motion.div>
    </motion.div>
    </div>
  );
}