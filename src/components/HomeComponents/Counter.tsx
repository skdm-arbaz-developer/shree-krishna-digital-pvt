import "../../css/home/counter.css";
import CountUp from 'react-countup';

export default function Counter() {
  const counters = [
    {
      digit: 500,
      title: "Satisfied Clients",
    },
    {
      digit: 6,
      title: "Years Experience",
    },
    {
      digit: 500,
      title: "Project Completed",
    },
    {
      digit: 10000,
      title: "Paid Leads Generated",
    },
  ];
  return (
    <section className="section">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {counters.map((val, index) => (
            <div key={index}>
              <CountUp enableScrollSpy start={0} end={val.digit} scrollSpyDelay={1000} delay={10000}>
                {({ countUpRef }) => (
                  <div className="counter flex justify-center flex-col items-center">
                      <h2><span ref={countUpRef} />+</h2>
                      <p>{val.title}</p>
                    
                  </div>
                )}
              </CountUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
