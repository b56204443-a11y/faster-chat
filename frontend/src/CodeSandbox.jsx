import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
//import { oneDark } from '@codemirror/theme-one-dark';

function CodeSandbox() {
  // 这里存放的是沙箱默认显示的 C 语言代码
  const [code, setCode] = useState(
`#include <stdio.h>

int main() {
    printf("Hello, Data Structures!\\n");
    return 0;
}`
  );

  // 监听用户在编辑器里的输入
  const handleCodeChange = (value) => {
    setCode(value);
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      {/* 编辑器外框，加了一点阴影和圆角让它看起来更高级 */}
      <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
        <CodeMirror
          value={code}
          height="400px"
      
          extensions={[cpp()]} 
          onChange={handleCodeChange}
          style={{ fontSize: '16px' }} // 字体稍微调大一点，适合教学演示
        />
      </div>

      {/* 底部按钮区域 */}
      <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={() => alert('稍后我们会在这里对接 Node.js 后端！\n当前代码：\n' + code)}
          style={{ 
            padding: '10px 24px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          ▶ 编译并运行
        </button>
      </div>
    </div>
  );
}

export default CodeSandbox;