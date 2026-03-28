'use client';

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import type { Dictionary } from "@/i18n/dictionaries";

interface ContactMeSectionProps {
    dictionary: Dictionary['contact'];
}

export function ContacMeSection({ dictionary }: ContactMeSectionProps) {

    return (
        <div
            className="mx-auto px-8 pb-8 max-w-5xl"
        >
            <h1 id="contact-me" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-[#0b1d3a] md:text-7xl">
                {dictionary.title}
            </h1>
            <div className="text-[#0b1d3a]">
                <form
                    action="https://formspree.io/f/xqaznppo"
                    method="POST"
                    className="space-y-8 max-w-xl"
                    >
                    <div className="space-y-2">
                        <label className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed">{dictionary.nameLabel}</label>
                        <Input className="bg-white/90 px-3 py-2 border border-primary/30 w-full h-10 text-sm" placeholder={dictionary.namePlaceholder} name="name" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm">{dictionary.emailLabel}</label>
                        <Input className="bg-white/90 px-3 py-2 border border-primary/30 w-full h-10 text-sm" placeholder={dictionary.emailPlaceholder} name="email" required />
                    </div>
                    <div className="space-y-2">
                        <label className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed">{dictionary.messageLabel}</label>
                        <br />
                        <textarea className="flex border-input bg-white/90 px-3 py-2 border border-primary/30 rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full min-h-[80px] text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed" rows={7} placeholder={dictionary.messagePlaceholder} name="message" required />
                    </div>
                    <Button
                        className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                        {dictionary.submit}
                    </Button>
                </form >
            </div>
        </div >
    )
}
