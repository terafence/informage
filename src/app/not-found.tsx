"use client";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CompassIcon, MapPinIcon } from "lucide-react";
import Link from 'next/link';
import { motion } from "framer-motion";



const NotFoundPage = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 min-h-dvh bg-zinc-950 text-zinc-100">
            <Wrapper>
                <Container className="flex flex-col items-center justify-center mx-auto py-16">
                    <div className="flex items-center justify-center h-full flex-col text-center">
                        {/* Animated Graphic */}
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-xl" />
                            </div>
                            
                            <div className="relative flex items-center justify-center w-24 h-24 mb-6">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-600/10 to-teal-600/10 backdrop-blur-sm" />
                                <CompassIcon className="size-12 text-emerald-400" />
                            </div>
                            
                            <motion.div
                                className="absolute bottom-2 right-0"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 shadow-md border border-zinc-800">
                                    <MapPinIcon className="size-5 text-red-500" />
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        {/* Error Badge */}
                        <motion.span 
                            className="text-sm font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 shadow-md"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            404 Error
                        </motion.span>
                        
                        {/* Main Content */}
                        <motion.h1 
                            className="text-4xl md:text-6xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Page Not Found
                        </motion.h1>
                        
                        <motion.p 
                            className="text-base md:text-lg text-zinc-400 mt-6 text-center mx-auto max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            The destination you&apos;re looking for seems to have vanished. 
                            It might have been moved or may not exist.
                        </motion.p>
                        
                        {/* Navigation Button */}
                        <motion.div 
                            className="mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Link href="/">
                                <Button variant="default" size="lg" className="min-w-40 gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-none shadow-md">
                                    <ArrowLeftIcon className="size-4" />
                                    Back to Home
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </Container>
            </Wrapper>
        </main>
    );
};

export default NotFoundPage;