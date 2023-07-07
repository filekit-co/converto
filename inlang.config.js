
/**
  * @type { import("@inlang/core/config").DefineConfig }
  */
export async function defineConfig(env) {
  const { default: jsonPlugin } = await env.$import(
    "https://cdn.jsdelivr.net/npm/@inlang/plugin-json@3/dist/index.js",
  )
  const { default: sdkPlugin } = await env.$import(
    "https://cdn.jsdelivr.net/npm/@inlang/sdk-js-plugin@0.7.0/dist/index.js"
  );
  const { default: standardLintRules } = await env.$import(
    'https://cdn.jsdelivr.net/gh/inlang/standard-lint-rules@2/dist/index.js'
  );

  const pathPattern = "./src/i18n/{language}.json"
  return {
    referenceLanguage: 'en',
    plugins: [
      jsonPlugin({
        pathPattern,
        variableReferencePattern: ["{", "}"],
      }),
      sdkPlugin({ languageNegotiation: { strategies: [{ type: "localStorage" }] } }),
      standardLintRules(),
    ]
  };
}
