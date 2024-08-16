import { useState } from "react";
import "./App.css";
import { AlertDialog } from "./catalyst/AlertDialog";
import { Button } from "./catalyst/Button";
import { Checkbox, CheckboxGroup } from "./catalyst/Checkbox";
import { Switch } from "./catalyst/Switch";
import { Modal } from "./catalyst/Modal";
import { ComboBoxItem, ComboBox } from "./catalyst/ComboBox";
import StringableCard, { NamespaceProvider } from "./Helpers";
import { FieldError, FieldGroup, Input, Label } from "./catalyst/Field";
import { DropdownItem, ListBox, ListBoxItem } from "./catalyst/ListBox";
import { TextField } from "./catalyst/TextField";
import { NumberField } from "./catalyst/NumberField";

export function Catalyst() {
  const [showModal, setShowModal] = useState(false);

  return (
    <NamespaceProvider namespace="Code B stringified HTML output">
      <div className="max-w-7xl mx-auto">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(15,_minmax(0,_1fr))]">
          <StringableCard className="xl:col-span-5">
            <Button onPress={() => setShowModal(false)} className="">
              Open Dialog
            </Button>
            <Button
              onPress={() => setShowModal(false)}
              variant="secondary"
              className="ml-2"
            >
              Test
            </Button>
            <Button
              onPress={() => setShowModal(false)}
              variant="destructive"
              className="ml-2"
            >
              Test
            </Button>
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
            <Switch>Test</Switch>
          </StringableCard>

          <StringableCard className="sm:col-span-2 xl:col-span-9">
            <ComboBox>
              <ComboBoxItem>Item 1</ComboBoxItem>
              <ComboBoxItem>Item 2</ComboBoxItem>
              <ComboBoxItem>Item 3</ComboBoxItem>
            </ComboBox>
          </StringableCard>

          <StringableCard className="sm:col-span-2 md:col-span-1 xl:col-span-6">
            <ListBox>
              <ListBoxItem>Test</ListBoxItem>
              <ListBoxItem>Test</ListBoxItem>
              <ListBoxItem>Test</ListBoxItem>
              <ListBoxItem>Test</ListBoxItem>
            </ListBox>
          </StringableCard>

          <StringableCard className="sm:col-span-2 xl:col-span-9">
            <TextField label="test" description="Test me" type="search" />
            <NumberField label="test" description="Test me" />
          </StringableCard>

          <StringableCard className="sm:col-span-2 md:col-span-1 xl:col-span-6" />
        </section>
      </div>
    </NamespaceProvider>
  );
}
