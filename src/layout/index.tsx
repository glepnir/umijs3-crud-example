import React, { useState } from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import styles from './index.scss';
import { Link, useHistory, IRouteComponentProps } from 'umi';
import { UserOutlined, MenuFoldOutlined,SettingOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const getMenuSelectedKeys = (pathname: string): string[] => {
  if (pathname === '') return [];

  let paths: string[] = pathname.split('/');
  let selectedKeys: string[] = [];

  paths.forEach((_, i) => {
    selectedKeys.push(paths.slice(0, paths.length - i).join('/'));
  });
  return selectedKeys;
};

const layout: React.FC<IRouteComponentProps> = (props) => {
  const { location } = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <Layout className={styles.layout}>
      <Sider breakpoint="lg" collapsed={collapsed}>
        <div className="title">{collapsed ? 'Umijs' : 'Umijs Crud Demo'}</div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={getMenuSelectedKeys(location.pathname)}
        >
          <Menu.Item key="/course" icon={<UserOutlined />}>
            <Link to="/course">商品记录</Link>
          </Menu.Item>
          <Menu.Item key="/about" icon={<SettingOutlined/>}>
            <Link to="/about">关于我们</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-header">
          <Tooltip
            placement="bottom"
            title={collapsed ? '展开菜单' : '收起菜单'}
          >
            <MenuFoldOutlined
              className={collapsed ? 'trigger fold' : 'trigger'}
              onClick={toggle}
            />
          </Tooltip>
        </Header>
        <Content className="site-layout-content">{props.children}</Content>
        <Footer className="site-layout-footer"> umijs3-crud-example</Footer>
      </Layout>
    </Layout>
  );
};

export default layout;
