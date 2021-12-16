import { Link } from 'react-router-dom';
import Graph from 'components/Graph';
import { Block } from 'styles/block';
import { WorkWidgetWrapper } from './workWidget.style';

export default function index() {
  return (
    <WorkWidgetWrapper>
      <Block>
        <div className="top">
          <h3 className="widget_introduction">Half Year Work Results</h3>
          <Link to="" className="link">
            Browse more
          </Link>
        </div>
        <div className="graph_block">
          <Graph />
        </div>
      </Block>
    </WorkWidgetWrapper>
  );
}
