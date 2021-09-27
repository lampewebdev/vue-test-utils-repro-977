import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../../components/HelloWorld.vue";

describe("HelloWorld", () => {
    test("should match snapshot", async () => {
        const wrapper = shallowMount(HelloWorld, {
            propsData: {
                msg: "some msg",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        wrapper.unmount();
    });
});