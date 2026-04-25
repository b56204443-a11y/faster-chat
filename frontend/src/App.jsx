import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { useEffect } from "preact/hooks";
import { router } from "./router";
import { useThemeStore } from "./state/useThemeStore";
import CodeSandbox from './CodeSandbox';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    },
  },
});

const App = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  const mode = useThemeStore((state) => state.mode);
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      
      {/* 👇 我们临时把代码沙箱插在这里进行测试 👇 */}
      <div style={{ padding: '20px', borderBottom: '4px dashed #007bff', backgroundColor: 'var(--theme-surface, #1e1e1e)', zIndex: 9999, position: 'relative' }}>
        <h2 style={{ color: '#007bff', marginBottom: '10px' }}>🧪 你的毕设组件测试区</h2>
        <CodeSandbox />
      </div>
      {/* 👆 沙箱测试区结束 👆 */}

      {/* 下面是原本的路由系统，负责显示原作者的聊天界面 */}
      <RouterProvider router={router} />
      
      <Toaster
        theme={mode}
        position="bottom-right"
        toastOptions={{
          className: "!bg-theme-surface !text-theme-text !border-theme-border",
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
