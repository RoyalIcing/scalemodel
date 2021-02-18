function toCodeLines(f, output: Array<string>) {
  let appended: Array<string> = [];
  
  output.push(`function* ${f.name}() {`);
  output.push('\n');
  
  const generator = f();
  for (const value of generator) {
    if (typeof value === 'function') {
      output.push(`\tyield ${value.name};\n`);
      toCodeLines(value, appended);
    } else if (value instanceof String) {
      output.push(`\tyield new String(${JSON.stringify(value)});\n`);
    } else if (value === undefined) {
      output.push(`\tyield undefined;\n`);
    } else {
      output.push(`\tyield ${JSON.stringify(value)};\n`);
    }
  }
  
  output.push('}');
  
  if (appended.length > 0) {
    output.push('\n\n');
    output.push(...appended);
  }
}

export function toCode(f): string {
  let output: Array<string> = [];
  toCodeLines(f, output);
  return output.join('');
}
