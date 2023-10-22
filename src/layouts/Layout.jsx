import React from 'react'
import { motion } from "framer-motion";

function Layout({ children }) {
    return (
        <>
            <motion.div>
                {children}
            </motion.div>
        </>
    )
}

export default Layout