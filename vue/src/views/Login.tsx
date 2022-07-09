import { defineComponent, reactive } from "vue";
import { message } from "ant-design-vue";
import type { ChangeEvent } from "ant-design-vue/lib/_util/EventInterface";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

import { loginApi } from "@/services/user";
import type { LoginParams } from "@/services/user";

export default defineComponent({
  setup() {
    const formState = reactive<LoginParams>({
      username: "",
      password: "",
    });

    const onFinish = (values: LoginParams) => {
      loginApi(values).then(({ code }) => {
        if (code === 200) {
          message.success("登陆成功");
        }
      });
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    return () => (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a-row justify="space-between">
          {/* <CommunityIcon />
          <DocumentationIcon />
          <ToolingIcon />
          <EcosystemIcon />
          <SupportIcon /> */}
        </a-row>
        <a-form
          style={{
            width: "524px",
          }}
          model={formState}
          name="basic"
          label-col={{ span: 8 }}
          wrapper-col={{ span: 16 }}
          autocomplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <a-form-item
            label="Username"
            name="username"
            rules={[{ required: true, message: "请输入账号!" }]}
          >
            <a-input
              prefix={<UserOutlined class="site-form-item-icon" />}
              onChange={(e: ChangeEvent) => {
                formState.username = e.target.value;
              }}
            />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <a-input-password
              prefix={<LockOutlined class="site-form-item-icon" />}
              onChange={(e: ChangeEvent) => {
                formState.password = e.target.value;
              }}
            />
          </a-form-item>

          <a-form-item wrapper-col={{ offset: 8, span: 16 }}>
            <a-button
              type="primary"
              html-type="submit"
              style={{ width: "100%" }}
            >
              登陆
            </a-button>
          </a-form-item>
        </a-form>
      </section>
    );
  },
});
