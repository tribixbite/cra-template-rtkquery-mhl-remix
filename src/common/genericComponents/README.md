
# About

The generic meaning of 'component' is a module with the additional restriction of substitutability using a specific interface. If you create a GUI Widget component, it can be used anywhere a Widget is expected, without having to do anything special in the calling code.

Please check out the docs on how to use [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html).

Components goes here, you can generate with generate-react-cli, examples;
$ npx generate-react-cli component UserButton
$ npx generate-react-cli component Rectangle --type=d3class
$ npx generate-react-cli component Rectangle --type=d3
$ npx generate-react-cli component Login --type=recoil
$ npx generate-react-cli component MyButton --type=materialui
$ npx generate-react-cli component MyWidget --type=widget
$ npx generate-react-cli component LineChart --type=d3WidgetComponent
$ npx generate-react-cli component LineChartWidget --type=d3widget