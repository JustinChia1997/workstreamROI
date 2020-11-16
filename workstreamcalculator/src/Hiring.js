import HiringVariables from "./HiringVariables";
export default function Hiring(props) {
  return (
    <div>
      <HiringVariables
        min={0}
        max={1000}
        title={"New Hires"}
        description={"How many hires do you make per year?"}
        units={"hires"}
        type={"newHires"}
      />

      <HiringVariables
        min={0}
        max={20}
        title={"Sourcing Candidates"}
        description={
          "How many hours do you spend posting each new job opening?"
        }
        units={"hrs"}
        type={"sourcingCandidates"}
      />

      <HiringVariables
        min={0}
        max={40}
        title={"Scheduling Interviews"}
        description={
          "How many hours do you spend reading resumes and calling applicants for each role?"
        }
        units={"hrs"}
        type={"schedulingInterviews"}
      />

      <HiringVariables
        min={0}
        max={100}
        title={"Reducing No-Shows"}
        description={"What percent of applicants don't show up to interviews?"}
        units={"%"}
        type={"reducingNoShows"}
      />
      <HiringVariables
        min={0}
        max={20}
        title={"Onboarding"}
        description={
          "How many hours do you spend on paperwork and training materials for each new hire?"
        }
        units={"hrs"}
        type={"onboarding"}
      />
      <HiringVariables
        min={0}
        max={100}
        title={"Days to Hire"}
        description={"How many days does it take to fill a role?"}
        units={"days"}
        type={"daysToHire"}
      />
      <HiringVariables
        min={0}
        max={60}
        title={"Labor Costs"}
        description={"How much do you pay your hiring managers per hour?"}
        units={"dollars"}
        type={"laborCosts"}
      />
    </div>
  );
}
