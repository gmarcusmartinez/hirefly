import React from "react";
import { useTypedSelector } from "hooks/use-typed-selector";
import { texts, files, blankForm, selects } from "./inputs";
import { Text, FileInput } from "components/common/DashInputs";
import { Spinner } from "components/common/Spinner";
import { TextArea } from "components/common/DashInputs/TextArea";
import { Select } from "components/common/DashInputs";
import { useActions } from "hooks/use-actions";

export const JobForm = () => {
  const { createJob, updateJob } = useActions();
  const { theme } = useTypedSelector(({ dashboard }) => dashboard);
  const { loading, selected } = useTypedSelector(({ jobs }) => jobs);

  const defaultForm = selected ? selected : blankForm;
  const [formData, setFormData] = React.useState(defaultForm);
  const [imageData, setImageData] = React.useState<File | null>(null);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageData(e.target.files![0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !selected
      ? createJob(formData, imageData)
      : updateJob(formData, imageData, selected._id);
  };

  React.useEffect(() => {
    setFormData(defaultForm);
  }, [selected, defaultForm]);

  if (loading) return <Spinner />;
  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <Text onChange={onChange} item={texts[0]} value={formData.title} />
      <Text onChange={onChange} item={texts[1]} value={formData.company} />
      <Text onChange={onChange} item={texts[2]} value={formData.location} />
      <Text
        onChange={onChange}
        item={texts[3]}
        value={formData.salary}
        inputType="number"
      />
      <Text onChange={onChange} item={texts[4]} value={formData.link} />
      <TextArea
        onChange={onChange}
        item={texts[5]}
        value={formData.description}
      />
      <FileInput item={files[0]} onChange={onImgChange} file={imageData} />
      <Text
        onChange={onChange}
        item={texts[6]}
        value={formData.duration}
        inputType="number"
      />
      <Select item={selects[0]} onChange={onChange} value={formData.position} />
      <Select item={selects[1]} onChange={onChange} value={formData.category} />
      <Text onChange={onChange} item={texts[7]} value={formData.skills} />
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};
