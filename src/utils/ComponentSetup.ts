export class ComponentSetup {
    public static setupComponent(setupData: any) {
        async function getStyles() {
        const response = await fetch(setupData.styles);
        const css = await response.text();
        return css;
        }
    
        async function getTemplate() {
        const response = await fetch(setupData.template);
        const html = await response.text();
        return html;
        }
    
        getTemplate().then((html) => {
        const template = document.createElement("template");
        template.innerHTML = html;
        const shadowRoot = component.shadowRoot;
        shadowRoot?.appendChild(template.content.cloneNode(true));
        });
    
        getStyles().then((css) => {
        const style = document.createElement("style");
        style.innerHTML = css;
        const shadowRoot = component.shadowRoot;
        shadowRoot?.appendChild(style);
        });
    }
}