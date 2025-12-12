import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import styles from './RootLayout.module.css';
import { useNavigate, useLocation, Outlet } from 'react-router';

const { Header, Sider, Content } = Layout;

export const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: '/', icon: <UserOutlined />, label: 'Главная' },
    { key: '/products', icon: <VideoCameraOutlined />, label: 'Продукты' },
    { key: '/orders', icon: <UploadOutlined />, label: 'Заказы' },
  ];

  return (
    <Layout className={styles.rootLayout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={styles.sider}
      >
        <img src='/images/logo.png' className={styles.logo} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>

      <Layout>
        <Header className={styles.header}>
          <button
            type="button"
            className={styles.collapseButton}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>

          <div className={styles.headerRight}>Админка</div>
        </Header>

        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
