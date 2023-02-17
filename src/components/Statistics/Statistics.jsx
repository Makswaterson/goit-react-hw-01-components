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
        {/* <li class="item">
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}</span>
        </li>
        <li class="item">
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}</span>
        </li>
        <li class="item">
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}</span>
        </li>
        <li class="item">
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}</span>
        </li> */}
      </ListStatistics>
    </SectionStatistics>
  );
};
