import "../SkillsBar/SkillsBar.css";
const SkillsBar = () => {
  const skills1 = [
    {
      ids: "num0",
      name: "HTML",
      dataCount: 98,
      idDiv: "bar0",
     
    },
    {
      ids: "num1",
      name: "CSS",
      dataCount: 95,
      idDiv: "bar1",
    
    },
    {
      ids: "num2",
      name: "REACT",
      dataCount: 96,
      idDiv: "bar2",
      
    },
    {
      ids: "num3",
      name: "Node.js",
      dataCount: 92,
      idDiv: "bar3",
      
    },
  ];
  const skills2 = [
    {
      ids: "num4",
      name: "JavaScript",
      dataCount: 90,
      idDiv: "bar4",
      
    },
    {
      ids: "num5",
      name: "Vite",
      dataCount: 94,
      idDiv: "bar5",
     
    },
    {
      ids: "num6",
      name: "3rd Party API",
      dataCount: 89,
      idDiv: "bar6",
     
    },
    {
      ids: "num7",
      name: "Redux",
      dataCount: 93,
      idDiv: "bar7",
     
    },
  ];

  // skills1.map((dataCount, ids) => {
  //   const movementBar = () => {
  //     let valueId = 1;
      
  //     const countBar = () => {
  //       valueId++;
  //       if (ids === 0 && valueId < dataCount.dataCount) {
  //       console.log( document.getElementById(`${ids}`));
  //         setTimeout(() => {
  //           countBar();
  //         }, 30);
          
  //       }
  //       if (ids === 1 && valueId < dataCount.dataCount) {
          
  //         setTimeout(() => {
  //           countBar();
  //         }, 30);
  //       }
  //       if (ids === 2 && valueId < dataCount.dataCount) {
          
  //         setTimeout(() => {
  //           countBar();
  //         }, 30);
  //       }
  //       if (ids === 3 && valueId < dataCount.dataCount) {
         
  //         setTimeout(() => {
  //           countBar();
  //         }, 30);
  //       }
  //     };
      
  //     countBar();
  //   };
  //   movementBar();
  // });

  return (
    <>
      <section className="row d-flex justify-content-center skills position-relative">
        <div className="col-sm-12 col-lg-9 d-flex flex-wrap justify-content-evenly">
          <section className="col-10 col-sm-10 col-lg-5">
            {skills1.map(({ ids, name, dataCount, idDiv}) => {
              return (
                <>
                  <div className="col-12 d-flex white">
                    <h6 className="col-10">{name}</h6>
                    <h6
                      className="text-end col-2"

                      data-count={dataCount}
                    ></h6>
                    <h6 id={ids} className="col-1">{dataCount} %</h6>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      id={idDiv}
                      className="progress-bar progress-bar-striped progress-bar-animated"
                    ></div>
                  </div>
                </>
              );
            })}
          </section>
          <section className="col-10 col-sm-10 col-lg-5">
            {skills2.map(({ ids, name, dataCount, idDiv }) => {
              return (
                <>
                  <div className="col-12 d-flex white">
                    <h6 className="col-10">{name}</h6>
                    <h6
                      className="text-end col-2"
                      id={ids}
                      data-count={dataCount}
                    ></h6>
                    <h6 className="col-1">{dataCount} %</h6>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      id={idDiv}
                      className="progress-bar progress-bar-striped progress-bar-animated"
                    ></div>
                  </div>
                </>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
};
export default SkillsBar;
