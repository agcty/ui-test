import { useState } from "react";
import "./App.css";
import { AlertDialog } from "./catalyst/AlertDialog";
import { Button } from "./catalyst/Button";
import { Checkbox, CheckboxGroup } from "./catalyst/Checkbox";
import { Switch } from "./catalyst/Switch";
import { Modal } from "./catalyst/Modal";
import { ComboBoxItem, ComboBox } from "./catalyst/ComboBox";
import StringableCard, { NamespaceProvider } from "./Helpers";
import { Label } from "./catalyst/Field";

export function Catalyst() {
  const [showModal, setShowModal] = useState(false);

  return (
    <NamespaceProvider namespace="Code B stringified HTML output">
      <div className="max-w-7xl mx-auto">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(15,_minmax(0,_1fr))]">
          <StringableCard className="xl:col-span-5">
            <Button onPress={() => setShowModal(true)}>Test</Button>
            <Modal isOpen={showModal} onOpenChange={() => setShowModal(false)}>
              <AlertDialog
                onAction={() => {}}
                title="Alert"
                actionLabel="Delete"
                variant="destructive"
              >
                Test
              </AlertDialog>
            </Modal>
          </StringableCard>

          <StringableCard className="xl:col-span-5">
            <CheckboxGroup label="Favorite Sports" description="Hi there">
              <Checkbox value="soccer">Soccer</Checkbox>
              <Checkbox value="ski">Ski</Checkbox>
              <Checkbox value="snow">Snowboard</Checkbox>
            </CheckboxGroup>
          </StringableCard>

          <StringableCard className="sm:col-span-2 md:col-span-1 xl:col-span-5">
            <Switch />
          </StringableCard>

          <StringableCard className="sm:col-span-2 xl:col-span-9">
            <ComboBox>
              <ComboBoxItem>Item 1</ComboBoxItem>
              <ComboBoxItem>Item 2</ComboBoxItem>
              <ComboBoxItem>Item 3</ComboBoxItem>
            </ComboBox>
          </StringableCard>

          <StringableCard className="sm:col-span-2 md:col-span-1 xl:col-span-6" />

          <StringableCard className="sm:col-span-2 xl:col-span-9" />
          <StringableCard className="sm:col-span-2 md:col-span-1 xl:col-span-6" />
        </section>
      </div>
    </NamespaceProvider>
  );
}
