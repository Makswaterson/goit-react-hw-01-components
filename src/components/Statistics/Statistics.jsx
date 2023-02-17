import PropTypes from 'prop-types';
import { getRandomHexColor } from '../GetRandomHexColor';
import {
  TitleStatistics,
  ListStatistics,
  SectionStatistics,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <TitleStatistics>{title}</TitleStatistics>}
      <ListStatistics>
        {stats.map(stat => {
          let color = getRandomHexColor();
          return (
            <li key={stat.id} style={{ backgroundColor: `${color}` }}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          );
        })}
      </ListStatistics>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
