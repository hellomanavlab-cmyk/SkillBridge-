export default function Logo({ withTagline = true }: { withTagline?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="34" height="34" rx="8" fill="#142B4A" />
        <path
          d="M8 21c1.5-4 3.8-6 9-6s7.5 2 9 6"
          stroke="#16B8A6"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="8" cy="22.2" r="1.8" fill="#16B8A6" />
        <circle cx="26" cy="22.2" r="1.8" fill="#16B8A6" />
        <path
          d="M12 12.5l3 3 6.5-6.5"
          stroke="#DDF7F2"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="leading-none">
        <p className="text-[17px] font-bold tracking-tight text-navy">SkillBridge</p>
        {withTagline && (
          <p className="mt-0.5 text-[10px] font-medium tracking-wide text-secondary">
            Powered by ManavLab
          </p>
        )}
      </div>
    </div>
  );
}
