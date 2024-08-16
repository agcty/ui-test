import { useState } from "react";
import "./App.css";
import { Alert } from "./headless/alert";
import { Button } from "./headless/button";
import { Checkbox } from "./headless/checkbox";
import { Switch } from "./headless/switch";
import { Listbox, ListboxOption } from "./headless/listbox";
import StringableCard, { NamespaceProvider } from "./Helpers";

export function Headless() {
  const [showModal, setShowModal] = useState(false);

  return (
    <NamespaceProvider namespace="Code A stringified HTML output">
      <div className="max-w-7xl mx-auto">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(15,_minmax(0,_1fr))]">
          <StringableCard className="xl:col-span-5">
            <Button onClick={() => setShowModal(true)}>
              Open Dialog
            </Button>
            <Alert onClose={() => setShowModal(false)} open={showModal}>
              Test
            </Alert>
          </StringableCard>

          <StringableCard className="xl:col-span-5">
            <Checkbox color="amber" />
          </StringableCard>

          <StringableCard className="sm:col-span-2 md:col-span-1 xl:col-span-5">
            <Switch color="red" />
          </StringableCard>

          <StringableCard className="sm:col-span-2 xl:col-span-9">
            <Listbox>
              <ListboxOption value="test1">Test 1</ListboxOption>
              <ListboxOption value="test2">Test 2</ListboxOption>
              <ListboxOption value="test3">Test 3</ListboxOption>
            </Listbox>
          </StringableCard>

          <StringableCard className="sm:col-span-2 md:col-span-1 xl:col-span-6" />
          <StringableCard className="sm:col-span-2 xl:col-span-9" />
          <StringableCard className="sm:col-span-2 md:col-span-1 xl:col-span-6" />
        </section>
      </div>
    </NamespaceProvider>
  );
}
