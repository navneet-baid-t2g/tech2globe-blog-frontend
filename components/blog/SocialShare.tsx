'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface SocialShareProps {
    showFacebook?: boolean;
    showTwitter?: boolean;
    showInstagram?: boolean;
    showWhatsApp?: boolean;
    showPinterest?: boolean;
    showEmail?: boolean;
    showNativeShare?: boolean;
}

const SocialShare: React.FC<SocialShareProps> = ({
    showFacebook = true,
    showTwitter = true,
    showWhatsApp = true,
    showPinterest = true,
    showEmail = true,
    showNativeShare = true,
}) => {
    const [currentUrl, setCurrentUrl] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
    const whatsappShare = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
    const pinterestShare = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}`;
    const emailShare = `mailto:?subject=Check this out&body=${encodeURIComponent(currentUrl)}`;

    const handleNativeShare = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Check this out!',
                url: currentUrl,
            }).catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Sharing not supported on this device.');
        }
    };

    return (
        <div className="social footer-social1 text-start">
            <ul className="flex items-center flex-wrap gap-1">
                <li className="text font-semibold" key={'share'}>Share:</li>

                {showFacebook && (
                    <li key={'facebook'}>
                        <Link href={facebookShare} target="_blank" aria-label="Share on Facebook">
                            <i className="fa-brands fa-facebook-f" />
                        </Link>
                    </li>
                )}

                {showTwitter && (
                    <li key={'twitter'}>
                        <Link href={twitterShare} target="_blank" aria-label="Share on Twitter">
                            <i className="fa-brands fa-x-twitter" />
                        </Link>
                    </li>
                )}


                {showWhatsApp && (
                    <li key={'whatsapp'}>
                        <Link href={whatsappShare} target="_blank" aria-label="Share on WhatsApp">
                            <i className="fa-brands fa-whatsapp" />
                        </Link>
                    </li>
                )}

                {showPinterest && (
                    <li key={'pinterest'}>
                        <Link href={pinterestShare} target="_blank" aria-label="Share on Pinterest">
                            <i className="fa-brands fa-pinterest-p" />
                        </Link>
                    </li>
                )}

                {showEmail && (
                    <li key={'email'}>
                        <Link href={emailShare} target="_blank" aria-label="Share via Email">
                            <i className="fa-solid fa-envelope" />
                        </Link>
                    </li>
                )}

                {showNativeShare && (
                    <li key={'nativeShare'}>
                        <Link href="#" onClick={(e) => { e.preventDefault(); handleNativeShare(); }} aria-label="Share via Device">
                            <i className="fa-solid fa-share-nodes" />
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SocialShare;
