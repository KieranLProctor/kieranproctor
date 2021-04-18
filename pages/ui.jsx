import Head from "next/head";
import Layout from "../components/Layout";
import * as Button from "../components/UI/Buttons";
import * as Badge from "../components/UI/Badges";

export default function UI() {
  return (
    <Layout>
      <Head>
        <title>Kieran Proctor | UI</title>
      </Head>
      <div className="space-y-6">
        <div>
          <span class="text-xl text-gray-900">Buttons</span>
          <div className="mt-1 space-x-2">
            <Button.Primary text="TESTING" />
            <Button.Secondary text="TESTING" />
            <Button.White text="TESTING" />
            <Button.Round text="TESTING" />
            <Button.Circular />
          </div>
        </div>
        <div>
          <span class="text-xl text-gray-900">Badges</span>
          <div className="mt-1 space-x-2">
            <Badge.Basic text="TESTING" />
            <Badge.Dot text="TESTING" />
            <Badge.Rounded text="TESTING" />
            <Badge.RoundedDot text="TESTING" />
            <Badge.Remove text="TESTING" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
