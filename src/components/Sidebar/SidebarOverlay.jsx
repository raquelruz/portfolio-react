import { motion } from "framer-motion";

export const SidebarOverlay = ({ children, onClose }) => {
	return (
		<>
			<motion.div
				className="fixed inset-0 bg-bg backdrop-blur-sm z-40 md:hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={onClose}
			/>

			<motion.aside
				initial={{ x: -260 }}
				animate={{ x: 0 }}
				exit={{ x: -260 }}
				transition={{ type: "spring", stiffness: 120, damping: 20 }}
				className="fixed top-0 left-0 h-full w-64 bg-card border-r border-border flex flex-col justify-between p-6 z-50 md:hidden"
			>
				{children}
			</motion.aside>
		</>
	);
}
