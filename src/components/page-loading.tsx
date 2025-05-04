import { Flex, Spin } from 'antd';

function PageLoading() {
  return (
    <Flex
      justify="center"
      style={{
        paddingTop: 24,
      }}
    >
      <Spin />
    </Flex>
  );
}

export default PageLoading;
