interface IconButtonProps {
  href: string;
  icon: string;
  ariaLabel?: string;
}

export function IconButton({ href, icon, ariaLabel }: IconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-8 h-8 flex items-center justify-center border border-[var(--border-color)] rounded text-[var(--text-color)] bg-transparent transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-[var(--button-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]
        max-sm:w-7 max-sm:h-7
        max-[480px]:w-6 max-[480px]:h-6"
    >
      <i className={`${icon} max-sm:text-sm max-[480px]:text-xs`} />
    </a>
  );
}
