import { graphql, useStaticQuery } from "gatsby";

export const useVacationAnnouncement = () => {
  let data;
  try {
    data = useStaticQuery(graphql`
      query VacationNoticeQuery {
        allContentfulVacationNotice(limit: 1) {
          nodes {
            startDate
            endDate
            message {
              message
            }
          }
        }
      }
    `);
  } catch {
    return null;
  }

  const vacation = data?.allContentfulVacationNotice?.nodes?.[0];

  if (!vacation) {
    return null;
  }

  const startDate = vacation.startDate ? new Date(vacation.startDate) : null;
  const endDate = vacation.endDate ? new Date(vacation.endDate) : null;

  if (!startDate || !endDate) return null;

  const today = new Date();

  const showFrom = new Date(startDate);
  showFrom.setDate(startDate.getDate() - 4);

  const isActive = today >= showFrom && today <= endDate;

  const formatDateRange = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const startDay = s.getDate();
    const startMonth = (s.getMonth() + 1).toString().padStart(2, "0");
    const endDay = e.getDate();
    const endMonth = (e.getMonth() + 1).toString().padStart(2, "0");
    const endYear = e.getFullYear();
    return `${startDay}.${startMonth} – ${endDay}.${endMonth}.${endYear}`;
  };

  return {
    isActive,
    dateRange: formatDateRange(startDate, endDate),
    message:
      vacation?.message?.message?.trim() ||
      "zakład będzie nieczynny z powodu urlopu.",
  };
};
