export function HeroConsole() {
  return (
    <div className="hero-console" aria-label="Схема рабочего процесса KodBuster">
      <div className="console-topline">
        <span>PROJECT SYSTEM</span>
        <span className="status-dot">ONLINE</span>
      </div>
      <div className="console-stage">
        <span className="console-k">K</span>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <span className="axis-label axis-x">DESIGN</span>
        <span className="axis-label axis-y">CODE</span>
        <span className="scanline" />
      </div>
      <div className="console-readout">
        <span><b>01</b> STRATEGY</span>
        <span><b>02</b> INTERFACE</span>
        <span><b>03</b> RELEASE</span>
      </div>
    </div>
  );
}
