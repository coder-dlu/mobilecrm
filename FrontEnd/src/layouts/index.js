
import { useIntl } from 'umi';
import './index.less';

export default function Layout({ children, location, route, history, match }) {
  if (location.pathname == '/reception') {
    history.push('/reception/login');
  }
  let path = location.pathname;
  const intl = useIntl();

  const defaultTitle = intl.formatMessage({
    id: 'menu' + path.replaceAll('/', '.'),
    defaultMessage: 'Proud PMS',
  });

  document.title = defaultTitle;

  return (
    <div className="layout-bg">
        <div className="reception-layout"></div>
        {children}
    </div>
  );
}
