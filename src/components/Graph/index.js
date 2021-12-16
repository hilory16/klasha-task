import React, { PureComponent, useContext } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  CartesianAxis
} from 'recharts';
import { ThemeContext } from 'context/themeContext';
import { GraphWrapper } from './graph.style';
const data = [
  {
    training_sessions: 2.5,
    team_meetings: 2.3,
    medical_checks: 0.5
  },
  {
    training_sessions: 7.5,
    team_meetings: 0.5,
    medical_checks: 1
  },
  {
    training_sessions: 2.5,
    team_meetings: 4,
    medical_checks: 0.5
  },
  {
    training_sessions: 2.5,
    team_meetings: 10,
    medical_checks: 5
  },
  {
    training_sessions: 1.5,
    team_meetings: 6.6,
    medical_checks: 2
  },
  {
    training_sessions: 6,
    team_meetings: 6,
    medical_checks: 4
  },
  {
    training_sessions: 7,
    team_meetings: 0,
    medical_checks: 2
  },
  {
    training_sessions: 1,
    team_meetings: 2.5,
    medical_checks: 1
  }
];
export default class Example extends PureComponent {
  formatYAxis = (tickItem) => {
    return `${tickItem}`;
  };

  strokeColors = ['yellow', 'pink', 'blue'];
  render() {
    return (
      <GraphWrapper>
        <ThemeContext.Consumer>
          {(value) => (
            <>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data} margin={{ top: 27, right: 0, left: 0, bottom: 0 }}>
                  <YAxis
                    domain={[0, 'dataMax']}
                    width={30}
                    padding={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={this.formatYAxis}
                  />
                  <CartesianGrid vertical={false} height={1.5} />
                  <Tooltip cursor={{ stroke: '#fa4a84', strokeWidth: 1 }} />
                  <Area
                    type="monotone"
                    dataKey="training_sessions"
                    stroke={value.colors?.yellow}
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    animationDuration={3000}
                  />
                  <Area
                    type="monotone"
                    dataKey="team_meetings"
                    stroke={value.colors?.red}
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    animationDuration={3000}
                  />
                  <Area
                    type="monotone"
                    dataKey="medical_checks"
                    stroke={value.colors?.blue}
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    animationDuration={3000}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <ul className="legend">
                {Object.keys(data[0]).map((item, i) => {
                  return (
                    <li key={item}>
                      <div className={`legend_icon ${this.strokeColors[i]}`}></div>
                      <div className="legend_text">{item.replace('_', ' ')}</div>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </ThemeContext.Consumer>
      </GraphWrapper>
    );
  }
}
